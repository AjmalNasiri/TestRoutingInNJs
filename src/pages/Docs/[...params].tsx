
import Router, { useRouter } from "next/router"
function docsdetails(){
    const router= useRouter()
    const {params}= router.query
       console.log(params)
    return <h1>hello my productdetails {params}</h1>
}
export default docsdetails