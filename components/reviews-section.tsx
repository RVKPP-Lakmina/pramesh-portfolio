"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, Calendar, ThumbsUp, Plus } from "lucide-react"
import ReviewForm from "./review-form"

interface Review {
  id: string
  name: string
  role: string
  company: string
  rating: number
  comment: string
  date: string
  avatar: string
  helpful: number
  verified: boolean
}

const initialReviews: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechCorp Solutions",
    rating: 5,
    comment:
      "Pramesh delivered exceptional work on our React application. His attention to detail and problem-solving skills are outstanding. The project was completed ahead of schedule with excellent code quality.",
    date: "2024-01-15",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format",
    helpful: 12,
    verified: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupHub",
    rating: 5,
    comment:
      "Working with Pramesh was a game-changer for our startup. His full-stack expertise helped us build a scalable platform that handles thousands of users. Highly recommended!",
    date: "2024-01-10",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format",
    helpful: 8,
    verified: true,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "InnovateLabs",
    rating: 4,
    comment:
      "Pramesh's knowledge of modern JavaScript frameworks is impressive. He helped optimize our application performance significantly. Great communication throughout the project.",
    date: "2024-01-05",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
    helpful: 6,
    verified: true,
  },
  {
    id: "4",
    name: "David Kumar",
    role: "Product Owner",
    company: "DigitalFlow",
    rating: 5,
    comment:
      "Exceptional work on our e-commerce platform. Pramesh's expertise in Node.js and database optimization resulted in 40% faster load times. Professional and reliable.",
    date: "2023-12-28",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
    helpful: 15,
    verified: true,
  },
]

export default function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({})

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const handleAddReview = (newReview: Omit<Review, "id" | "date" | "helpful" | "verified">) => {
    const review: Review = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      helpful: 0,
      verified: false,
    }
    setReviews([review, ...reviews])
    setShowForm(false)
  }

  const handleHelpfulVote = (reviewId: string) => {
    if (!helpfulVotes[reviewId]) {
      setHelpfulVotes({ ...helpfulVotes, [reviewId]: true })
      setReviews(
        reviews.map((review) => (review.id === reviewId ? { ...review, helpful: review.helpful + 1 } : review)),
      )
    }
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
    percentage: (reviews.filter((review) => review.rating === rating).length / reviews.length) * 100,
  }))

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    }

    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-400"
            } transition-colors duration-200`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="reviews" className="py-20 px-4 bg-gray-800/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Client Reviews
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What clients say about working with me and the quality of my development services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">{averageRating.toFixed(1)}</div>
                {renderStars(Math.round(averageRating), "lg")}
                <p className="text-gray-400 mt-2">Based on {reviews.length} reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3 mb-6">
                {ratingDistribution.map((item) => (
                  <div key={item.rating} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400 w-8">{item.rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-8">{item.count}</span>
                  </div>
                ))}
              </div>

              {/* Add Review Button */}
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Plus size={20} />
                <span>Write a Review</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Reviews List */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                      />
                      {review.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="text-white font-semibold">{review.name}</h4>
                          <p className="text-gray-400 text-sm">
                            {review.role} at {review.company}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {renderStars(review.rating, "sm")}
                          <span className="text-gray-400 text-sm">{review.rating}/5</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">{review.comment}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar size={14} />
                          <span>{new Date(review.date).toLocaleDateString()}</span>
                          {review.verified && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                              Verified Client
                            </span>
                          )}
                        </div>

                        <motion.button
                          onClick={() => handleHelpfulVote(review.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={helpfulVotes[review.id]}
                          className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-all duration-200 ${
                            helpfulVotes[review.id]
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-cyan-400"
                          }`}
                        >
                          <ThumbsUp size={14} />
                          <span className="text-sm">Helpful ({review.helpful})</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div variants={itemVariants} className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 border border-gray-600 hover:border-cyan-400/50"
              >
                Load More Reviews
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Review Form Modal */}
      {showForm && <ReviewForm onSubmit={handleAddReview} onClose={() => setShowForm(false)} />}
    </section>
  )
}
