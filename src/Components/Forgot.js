import React from 'react'
import { Link } from "react-router-dom";

export class Forgot extends React.Component {
    render() {
        return (
            <div className="container" style={{ display: "flex", justifyContent: "center", marginTop: "170px" }} >
                <div className="card p-3" style={{ width: "30rem", borderRadius:"15px", boxShadow:"0 4px 10px 0 rgb(20 19 34 / 3%), 0 0 10px 0 rgb(20 19 34 / 2%)", border:"none" }}>
                    <div className="card-body">
                        <p className="card-title mb-3" style={{fontSize:"30px"}}>Reset Password</p>
                        <form>
                            <div className="mb-3">
                                <label className="form-label w-100" >
                                    <input type="email" placeholder="Email Address" className="form-control" style={{borderRadius:"12px"}} />
                                </label>
                            </div>
                            <input className="btn w-100" type="submit" value="Reset my password" style={{ backgroundColor: "#34dede", color: "white", borderRadius:"12px" }} />
                        </form>
                        <p className="mt-3"><Link to="/login" style={{ textDecoration: "none", color: "#34dede" }}> <span style={{fontSize:"12px"}}><i class="fas fa-arrow-left"></i></span> Go to Sign in</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}