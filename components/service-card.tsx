interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FEFAE0]/0 to-[#FEFAE0]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="bg-white rounded-lg p-6 border border-[#E9EDC9] hover:border-[#D4A373] transition-colors duration-300 h-full flex flex-col">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 font-serif text-[#5C5C5C]">{title}</h3>
        <p className="text-[#5C5C5C]">{description}</p>
      </div>
    </div>
  )
}
