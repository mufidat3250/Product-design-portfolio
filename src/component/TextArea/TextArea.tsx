
import './TextArea.css'

const TextArea = () => {
  return (
    <div className='border-[1px] border-neural'>
        <textarea className='pt-[1.5rem] pl-[1.5rem] placeholder:text-[rgba(31, 31, 31, 0.5)] resize-none' rows={20} placeholder='Type your message....'>
        </textarea>
    </div>
  )
}

export default TextArea