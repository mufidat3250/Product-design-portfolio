import './NavTab.css'

let navTab = [{title:'Projects', link:'projects'}, {
  title:'Experience',
  link:'experience'
}, {
  title:'Say Hi 👋',
  link:'sayhi'
}]

const NavTab = () => {
  return (
    <div className='Nav flex items-center justify-between mt-5 lg:flex '>
        <h3 className='text-[#1F1F1F] font-[900]'>Tochukwu’s <span className='font-[350]'>Portfolio</span></h3>
        <div className='flex space-x-[2.5rem] items-center'>
        {
            navTab.map(({title, link}, index)=> {                
                return <a href={`#${link}`} className={`${index==navTab.length-1 ? 'cursor-pointer py-[0.90625rem] bg-neural text-white px-[1.9375rem] border-transparent border-b-4 font-bold hover:border-b-4 hover:border-orange ':' cursor-pointer text-base border-b-transparent border-b-2 hover:border-orange hover:text-orange '}`} key ={index}>{title}</a>
            })
        }
        </div>
    </div>
  )
}

export default NavTab