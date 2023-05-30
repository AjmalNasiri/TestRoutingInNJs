
import Router, { useRouter } from "next/router"
function productdetails(){
    const router= useRouter()
    const {productid ,reviewId } = router.query
    return(
      <h1>hello {reviewId}my productdetails {productid}</h1>
    )
   
}
export default productdetails