/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useState } from "react";
import { CldImage } from "next-cloudinary";

export default function ImageUpload() {
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-center h-auto p-4">
      <div className="relative">
        <label
          htmlFor="image-upload"
          className="block text-center bg-gray-200 p-4 rounded-md cursor-pointer"
        >
          <span className="text-gray-500">
            Haz clic aquí para seleccionar una imagen
          </span>
          <input
            id="image-upload"
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
          />
        </label>
        {previewImage && (
          <img className="mt-4" src={previewImage.toString()} alt="Preview" />
        )}
      </div>
    </div>
  );
}
