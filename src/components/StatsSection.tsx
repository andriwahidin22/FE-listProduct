
import { Shield, Users, Download, Trophy } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10M+",
      label: "Pengguna Aktif",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Tingkat Deteksi",
      color: "text-green-600"
    },
    {
      icon: Download,
      number: "50M+",
      label: "Total Download",
      color: "text-orange-600"
    },
    {
      icon: Trophy,
      number: "15+",
      label: "Penghargaan",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-12 -mt-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-100">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
