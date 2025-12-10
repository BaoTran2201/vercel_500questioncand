"""
Script to extract images from DOCX file and create image mappings for quiz questions.
This script will:
1. Read the DOCX file
2. Extract all images
3. Map images to question IDs based on the structure
4. Create a CSV file for bulk import
"""

import os
import zipfile
import shutil
from pathlib import Path
import csv

# Question ranges with images
IMAGE_RANGES = [
    (131, 240),  # Traffic signs (110 questions)
    (331, 345),  # Car dashboard symbols (15 questions)
    (346, 455),  # Situation diagrams (110 questions)
]

def extract_images_from_docx(docx_path, output_dir):
    """
    Extract images from DOCX file.
    DOCX files are ZIP archives containing images in word/media/ folder.
    """
    print(f"Extracting images from {docx_path}...")
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # DOCX is a ZIP file
    with zipfile.ZipFile(docx_path, 'r') as zip_ref:
        # Get all image files from word/media/
        image_files = [f for f in zip_ref.namelist() if f.startswith('word/media/')]
        
        print(f"Found {len(image_files)} images in DOCX")
        
        # Extract images
        extracted_images = []
        for idx, img_file in enumerate(sorted(image_files), 1):
            # Get file extension
            ext = os.path.splitext(img_file)[1]
            
            # Extract image
            img_data = zip_ref.read(img_file)
            
            # Save with sequential numbering
            output_path = os.path.join(output_dir, f"extracted_{idx:03d}{ext}")
            with open(output_path, 'wb') as f:
                f.write(img_data)
            
            extracted_images.append(output_path)
            print(f"  Extracted: {output_path}")
        
        return extracted_images

def create_question_id_list():
    """Create list of all question IDs that have images."""
    question_ids = []
    for start, end in IMAGE_RANGES:
        question_ids.extend(range(start, end + 1))
    return sorted(question_ids)

def create_image_mappings(extracted_images, public_images_dir):
    """
    Create mappings between question IDs and image files.
    Returns a dictionary of {question_id: image_filename}
    """
    question_ids = create_question_id_list()
    
    print(f"\nTotal questions with images: {len(question_ids)}")
    print(f"Total extracted images: {len(extracted_images)}")
    
    if len(extracted_images) != len(question_ids):
        print(f"WARNING: Number of images ({len(extracted_images)}) does not match number of questions ({len(question_ids)})")
        print("Please verify the ranges or image extraction.")
    
    # Map images to question IDs
    mappings = {}
    for idx, question_id in enumerate(question_ids):
        if idx < len(extracted_images):
            # Copy image to public/images with proper naming
            src_path = extracted_images[idx]
            ext = os.path.splitext(src_path)[1]
            
            # Use question_<hash> format to match existing pattern
            # For now, use question ID as hash
            dest_filename = f"question_{question_id:03d}{ext}"
            dest_path = os.path.join(public_images_dir, dest_filename)
            
            # Copy file
            shutil.copy2(src_path, dest_path)
            print(f"Copied to: {dest_filename}")
            
            # Store mapping (relative path from public folder)
            mappings[question_id] = f"/images/{dest_filename}"
    
    return mappings

def save_csv_mappings(mappings, csv_path):
    """Save image mappings to CSV file."""
    print(f"\nSaving mappings to {csv_path}...")
    
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['questionId', 'imageUrl'])
        
        for question_id in sorted(mappings.keys()):
            writer.writerow([question_id, mappings[question_id]])
    
    print(f"Saved {len(mappings)} mappings to CSV")

def main():
    # Paths
    docx_path = "500 câu hoi CAND.docx"
    temp_extract_dir = "temp_extracted_images"
    public_images_dir = "public/images"
    csv_output = "image-mappings.csv"
    
    # Check if DOCX exists
    if not os.path.exists(docx_path):
        print(f"ERROR: File not found: {docx_path}")
        return
    
    # Step 1: Extract images from DOCX
    extracted_images = extract_images_from_docx(docx_path, temp_extract_dir)
    
    if not extracted_images:
        print("No images found in DOCX file")
        return
    
    # Step 2: Create mappings and copy to public/images
    mappings = create_image_mappings(extracted_images, public_images_dir)
    
    # Step 3: Save CSV
    save_csv_mappings(mappings, csv_output)
    
    # Step 4: Clean up temp directory
    print(f"\nCleaning up temporary directory...")
    shutil.rmtree(temp_extract_dir)
    
    print("\n" + "="*60)
    print("SUCCESS! Image extraction and mapping complete.")
    print(f"Total images processed: {len(mappings)}")
    print(f"CSV file created: {csv_output}")
    print("\nNext steps:")
    print("1. Review the CSV file to verify mappings")
    print("2. Run the bulk import script to update questions")
    print("="*60)

if __name__ == "__main__":
    main()
