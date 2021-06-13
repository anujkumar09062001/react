import React from 'react'

export class Login extends React.Component {
    render() {
        return (
            <div className="container" style={{ display: "flex", justifyContent: "center", marginTop: "170px" }} >
                <div className="card p-3" style={{ width: "30rem", borderRadius:"15px", boxShadow:"0 4px 10px 0 rgb(20 19 34 / 3%), 0 0 10px 0 rgb(20 19 34 / 2%)", border:"none" }}>
                    <div className="card-body">
                        <p className="card-title mb-3" style={{fontSize:"30px"}}>Sign In</p>
                        <form>
                            <div className="mb-3">
                                <label className="form-label w-100" >
                                    <input type="email" placeholder="Appointment ID" className="form-control" style={{borderRadius:"12px"}} />
                                </label>
                            </div>
                            <input className="btn w-100" type="submit" value="Sign in" style={{ backgroundColor: "#34dede", color: "white", borderRadius:"12px" }} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}