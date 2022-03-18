import Link from "next/link"
import {server} from "../../../config/index"
import Meta from '../../../components/Meta'

export default function article({article}) {
    // const router = useRouter()
    // const {id} = router.query()


	return (
		<div >
            <Meta title={article.title}/>
			<h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <Link href="/">Go back</Link>
		</div>
	)
}

// Load every time
// export const getServerSideProps = async (context) => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// // Load once and build each path 

// export const getStaticProps = async (context) => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// // Load once and build each path 

// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))
//     return {
//         paths: paths,
//         fallback: false
//     }
// }

// Load once and build each path 

export const getStaticProps = async (context) => {
	const res = await fetch(server + "/api/articles/" + context.params.id)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

// Load once and build each path 

export const getStaticPaths = async () => {
    const res = await fetch(server + "/api/articles")

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths: paths,
        fallback: false
    }
}