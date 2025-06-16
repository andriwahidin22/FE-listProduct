
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "IT Manager",
      company: "PT Teknologi Maju",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "CyberGuard telah menyelamatkan perusahaan kami dari berbagai serangan siber. Interface yang mudah dan perlindungan yang powerful!"
    },
    {
      name: "Sarah Wijaya",
      role: "Founder",
      company: "Digital Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Tim support yang responsif dan produk yang sangat reliable. Sudah 2 tahun menggunakan dan tidak pernah kecewa."
    },
    {
      name: "Ahmad Rahman",
      role: "System Administrator",
      company: "Bank Digital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Untuk keamanan tingkat enterprise, CyberGuard adalah pilihan terbaik. Fitur threat intelligence nya sangat membantu."
    }
  ];

  return (
    <section className="py-12 mt-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Apa Kata Pengguna Kami
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Dipercaya oleh ribuan perusahaan dan jutaan pengguna di seluruh Indonesia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 text-white">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-orange-400 mb-2" />
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-200">{testimonial.role}</div>
                  <div className="text-xs text-orange-300">{testimonial.company}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
