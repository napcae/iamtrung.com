interface PhilosophyStatementProps {
  text: string
}

export function PhilosophyStatement({ text }: PhilosophyStatementProps) {
  return (
    <div className="relative p-8 bg-white rounded-lg border border-[#E9EDC9] overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#D4A373]"></div>
      <p className="text-2xl font-serif italic text-[#5C5C5C] pl-4">"{text}"</p>
    </div>
  )
}
