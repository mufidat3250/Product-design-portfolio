

const Activities = ({title,link}:{title:string; link?:string}) => {
  return (
    <div className="flex flex-col">
    <p className="text-#1F1F1F text-[2rem]  pb-[0.875rem] font-[500] leading-[1.5rem]" id={link}>
      {title}
    </p>
    <span className="w-[7.125rem] h-[0.375rem] bg-orange"></span>
  </div>
  )
}

export default Activities