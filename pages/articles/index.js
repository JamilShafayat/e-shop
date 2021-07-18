import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Article(){
    const [dataList, setDataList ] = useState({isLoading: false, data: []});
    useEffect(()=>{
        setDataList({isLoading: true, data: []});
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
                setDataList({isLoading: false, data: res.data});
            })
            .catch((err)=>{
                setDataList({isLoading: false, data: []});
            })
        return ()=>{
            console.log('Component unmount.');
        }
    },[]);

    const deletePosts = (index) => {
        
        setDataList(prev=>{
            prev.data.splice(index, 1);
            return ({
                ...prev,
                data: [...prev.data] // prev.data.filter(post=>post.id !== id)
            })
            
        });
    }


    return (
        <>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Articles</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Articles</a></li>
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
                            {dataList.isLoading && <p>Loading....</p>}
                            {!dataList.isLoading && dataList.data.length === 0 && <div className="alert alert-danger">Article Not Found.</div>}
                            {!dataList.isLoading && dataList.data.length > 0 && <div className="alert alert-success">Total Articles: {dataList.data.length}</div>}
                        </div>
                    </div>
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
                                        {
                                            dataList.data.length > 0 && dataList.data.map((article, index) => {
                                                return  <tr key={index}>
                                                            <td className="name-pr">
                                                                <Link href={`articles/${article.id}`}>
                                                                    <a className="nav-link">{article.title}</a>
                                                                </Link>
                                                                <div className="input-group-append">
                                                                    <button onClick={deletePosts} className="btn btn-danger btn-theme m-1" type="button">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}