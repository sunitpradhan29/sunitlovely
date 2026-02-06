import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, X } from "lucide-react";

const MemoriesSection = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImages((prev) => [...prev, event.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    if (currentSlide >= images.length - 1) {
      setCurrentSlide(Math.max(0, images.length - 2));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient-love"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Our Precious Memories 📸
        </motion.h2>

        {/* Upload area */}
        <motion.label
          className="block w-full max-w-md mx-auto mb-8 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="border-2 border-dashed border-primary/40 rounded-2xl p-8 text-center bg-card/50 backdrop-blur-sm hover:border-primary transition-colors">
            <Upload className="w-12 h-12 mx-auto mb-4 text-primary/60" />
            <p className="text-muted-foreground">
              Click to upload our photos together 💕
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              PNG, JPG up to 10MB
            </p>
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </motion.label>

        {/* Image gallery */}
        {images.length > 0 && (
          <div className="space-y-6">
            {/* Main slideshow */}
            <motion.div
              className="relative aspect-video rounded-3xl overflow-hidden shadow-float bg-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img
                src={images[currentSlide]}
                alt={`Memory ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentSlide ? "bg-primary" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative group aspect-square rounded-xl overflow-hidden shadow-love cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentSlide(i)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className={`w-full h-full object-cover transition-opacity ${
                      i === currentSlide ? "ring-2 ring-primary" : ""
                    }`}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(i);
                    }}
                    className="absolute top-1 right-1 p-1 rounded-full bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={14} className="text-foreground" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {images.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ImageIcon className="w-16 h-16 mx-auto mb-4 text-primary/30" />
            <p className="text-muted-foreground">
              Upload photos to create our memory slideshow 🌸
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default MemoriesSection;
