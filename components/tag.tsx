interface TagProps {
  title: string
  color: string
}

const Tag = ({ title, color }: TagProps) => {
  return (
    <span
      className={`px-3 md:px-4 py-1.5 md:py-2 bg-${color}-500/10 rounded-full text-${color}-400 text-xs md:text-sm`}
    >
      {title}
    </span>
  )
}

export default Tag
