import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import {server} from "../config/index"

export default function Home({articles}) {
	return (
		<div >
			<ArticleList articles={articles}/>		
		</div>
	)
}

//getStaticProps - fetch at build
// stores everything in memory and just returns same shit all the time

//getServerSideProps - on every request.
//getStaticPaths - gets parameters for paths


export const getStaticProps = async () => {
	// Third party 
	// const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
	
	// Own api version 
	const res = await fetch(server + "/api/articles")

	const articles = await res.json()

	return {
		props: {
			articles
		}
	}
}