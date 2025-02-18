import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsSection() {
  const testimonials = [
    {
      date: "Apr 12, 2024",
      content:
        "Thank you so much for providing such a valuable resource! I appreciate your dedication and generosity. Your creativity is truly inspiring! 🔥❤️",
      author: {
        name: "Roni",
        image: "/placeholder.svg",
      },
    },
    {
      date: "Jun 04, 2024",
      content: "Amazing work, love the custom made hero images",
      author: {
        name: "Khan Muhammad Siam",
        image: "/placeholder.svg",
      },
    },
    {
      date: "Jun 02, 2024",
      content: "Those hero section of every websites is modern and eye-catching 😊",
      author: {
        name: "Red1",
        image: "/placeholder.svg",
      },
    },
    {
      date: "Apr 22, 2024",
      content: "Your body of work so far is incredible, and this is my favorite so far.",
      author: {
        name: "Allan Smith",
        image: "/placeholder.svg",
      },
    },
    {
      date: "Mar 25, 2024",
      content: "Congratulations and it's a cool-looking template!",
      author: {
        name: "Sebastian Heitmann",
        image: "/placeholder.svg",
      },
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What People Say</h2>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="min-w-[300px] md:min-w-[400px] bg-zinc-900/50 border-zinc-800 backdrop-blur-sm snap-center"
              >
                <CardHeader className="pb-4">
                  <time className="text-sm text-gray-400">{testimonial.date}</time>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-200 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-zinc-800">
                        <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                        <AvatarFallback>{testimonial.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-white">{testimonial.author.name}</p>
                      </div>
                    </div>
                    <Twitter className="h-5 w-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

