import React from 'react';
import "./faleconosco.module.css";

export const FaleConosco = () => {
    return (
        <center>
            <div className="contener col-10 mt-4 boxe">
                    <div className="row-10 " id="aaaa"> 

                <h1> Fale Conosco</h1>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Elogio</option>
                                <option>Reclamação</option>
                                <option>Sugestão</option>
                            </select>
                        </div>
                     
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-sucess btn-lg mt-4">enviar</button>
                    </form>

                    </div>
                </div>
            </div>
        </center>

    )
}
