import Link from 'next/link'

export default function Timeline(){
   return (
   <>
      <h1>Go</h1>
             <Link href="/">
                    <a>  Go Home  </a> 
            </Link>
      <style jsx>{`
         h1 {
           color: red; 
         }
       `}</style>
   </>
   )
}