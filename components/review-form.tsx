"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Star, User, Building, Briefcase } from "lucide-react"

interface ReviewFormProps {
  onSubmit: (review: {
    name: string
    role: string
    company: string
    rating: number
    comment: string
    avatar: string
  }) => void
  onClose: () => void
}

export default function ReviewForm({ onSubmit, onClose }: ReviewFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    rating: 0,
    comment: "",
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.rating === 0 || !formData.name || !formData.comment) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate a random avatar
    const avatarId = Math.floor(Math.random() * 1000)
    const avatar = `https://images.unsplash.com/photo-${1500000000000 + avatarId}?w=100&h=100&fit=crop&auto=format`

    onSubmit({
      ...formData,
      avatar,
    })

    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating })
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 rounded-2xl p-6 w-full max-w-2xl border border-gray-700 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Write a Review</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors duration-200">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Job Title
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                  placeholder="Your job title"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                placeholder="Your company name"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-white font-medium mb-3">Rating *</label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => handleRatingClick(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors duration-200 ${
                        star <= (hoveredRating || formData.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                      }`}
                    />
                  </motion.button>
                ))}
                <span className="ml-4 text-gray-400">{formData.rating > 0 && `${formData.rating}/5`}</span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-white font-medium mb-2">Review *</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Share your experience working with Pramesh. What did you like most about the collaboration?"
              />
              <p className="text-gray-400 text-sm mt-2">{formData.comment.length}/500 characters</p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                disabled={formData.rating === 0 || !formData.name || !formData.comment || isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Review</span>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
