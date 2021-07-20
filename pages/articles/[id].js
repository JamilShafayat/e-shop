import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Article() {
	const router = useRouter();
	const { id } = router.query;

	const [article, setArticle] = useState({ isLoading: false, data: [] });

	useEffect(() => {
		setArticle({ isLoading: true, data: [] });
		// <Link href={`articles/${index}`}>
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				setArticle({ isLoading: false, data: res.data });
			})
			.catch((err) => {
				setArticle({ isLoading: false, data: [] });
			});
		return () => {
			console.log("Component unmount.");
		};
	}, []);

	return (
		<>
			<div className="all-title-box">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Article</h2>
							<ul className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="#">Article</a>
								</li>
								<li className="breadcrumb-item">
									<a href="#">Article</a>
								</li>
								{/* <li className="breadcrumb-item active">Cart</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="cart-box-main">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="table-main table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th colSpan="2">Articles</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="name-pr">
												<a className="nav-link">{article.data.title}</a>
												<p>{article.data.body}</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
