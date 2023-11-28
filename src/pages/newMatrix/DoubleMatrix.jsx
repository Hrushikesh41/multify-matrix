import React, { useState } from 'react'
import "./DoubleMatrix.css"
import Navbar from '../../components/Header/Navbar';

const DoubleMatrix = () => {
    const matrix1 = [[], []];
    const matrix2 = [[], [], []];
    const result = [[], []];
    const [check, setCheck] = useState(false);
    const [resultMat, setResultMat] = useState([[], []]);

    const handleElement1 = (e) => {
        matrix1[0][0] = e.target.value;
    }

    const handleElement2 = (e) => {
        matrix1[0][1] = e.target.value;
    }

    const handleElement3 = (e) => {
        matrix1[0][2] = e.target.value;
    }

    const handleElement4 = (e) => {
        matrix1[1][0] = e.target.value;
    }

    const handleElement5 = (e) => {
        matrix1[1][1] = e.target.value;
    }

    const handleElement6 = (e) => {
        matrix1[1][2] = e.target.value;
    }

    const handleMatElement1 = (e) => {
        matrix2[0][0] = e.target.value;
    }

    const handleMatElement2 = (e) => {
        matrix2[0][1] = e.target.value;
    }

    const handleMatElement3 = (e) => {
        matrix2[1][0] = e.target.value;
    }

    const handleMatElement4 = (e) => {
        matrix2[1][1] = e.target.value;
    }
    const handleMatElement5 = (e) => {
        matrix2[2][0] = e.target.value;
    }

    const handleMatElement6 = (e) => {
        matrix2[2][1] = e.target.value;
    }

    const handleSubmit = () => {
        result[0][0] = (matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1] * matrix2[1][0]);
        result[0][1] = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1] * matrix2[1][1]);
        result[1][0] = (matrix1[1][0] * matrix2[0][0]) + (matrix1[1][1] * matrix2[1][0]);
        result[1][1] = (matrix1[0][1] * matrix2[1][0]) + (matrix1[1][1] * matrix2[1][1]);

        setResultMat([[(matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1] * matrix2[1][0]) + (matrix1[0][2] * matrix2[2][0]), (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1] * matrix2[1][1]) + (matrix1[0][2] * matrix2[2][1])],
        [(matrix1[1][0] * matrix2[0][0]) + (matrix1[1][1] * matrix2[1][0]) + (matrix1[1][2] * matrix2[2][0]), (matrix1[1][0] * matrix2[0][1]) + (matrix1[1][1] * matrix2[1][1]) + (matrix1[1][2] * matrix2[2][1])]]);


        // for (var i = 0; i < matrix1.length; i++) {
        //     for (var j = 0; j < matrix1.length; j++) {
        //         console.log(result[i][j])
        //         document.write(` <div class="result-app"style="background-color : #242424; height : 25vh; width : 100vw" >
        //         <div> ${result[i][j]} </div>
        //         </div>`)
        //     }
        // }

    }

    return (
        <>
            <Navbar />
            <div className='app'>
                <section className='sec1'>
                    <div className='firstMat'>
                        <h3>
                            Enter Elements of Matrix 1
                        </h3>
                        <div className='col'>
                            <div className='col1'><p>C1</p></div>
                            <div className='col2'><p>C2</p></div>
                            <div className='col2'><p>C3</p></div>
                        </div>
                        <div className='row1'>
                            <p>R1</p>
                            <div className='e1'>
                                <input type="number" name='e1' onChange={handleElement1} />
                                <br />
                            </div>

                            <div className='e2'>
                                <input type="number" name='e2' onChange={handleElement2} />
                                <br />
                            </div>
                            <div className='e3'>
                                <input type="number" name='e4' onChange={handleElement3} />
                                <br />
                            </div>
                        </div>

                        <div className='row2'>
                            <p> R2</p>
                            <div className='e4'>
                                <input type="number" name='e3' onChange={handleElement4} />
                                <br />
                            </div>

                            <div className='e5'>
                                <input type="number" name='e4' onChange={handleElement5} />
                                <br />
                            </div>
                            <div className='e6'>
                                <input type="number" name='e4' onChange={handleElement6} />
                                <br />
                            </div>
                        </div>




                    </div>
                </section>
                <section className='sec2d'>
                    <div className='secondMat1'>
                        <h3>Enter Elements of Matrix 2</h3>
                        <div className='col'>
                            <div className='col1'><p>C1</p></div>
                            <div className='col2'><p>C2</p></div>
                        </div>
                        <div className='row1'>
                            <p>R1</p>
                            <div className='e1'>
                                <input type="number" name='e1' onChange={handleMatElement1} />
                                <br />
                            </div>

                            <div className='e2'>
                                <input type="number" name='e2' onChange={handleMatElement2} />
                                <br />
                            </div>
                        </div>

                        <div className='row2'>
                            <p>R2</p>
                            <div className='e3'>
                                <input type="number" name='e3' onChange={handleMatElement3} />
                                <br />
                            </div>

                            <div className='e4'>
                                <input type="number" name='e4' onChange={handleMatElement4} />
                                <br />
                            </div>
                        </div>
                        <div className='row2'>
                            <p>R3</p>
                            <div className='e3'>
                                <input type="number" name='e3' onChange={handleMatElement5} />
                                <br />
                            </div>

                            <div className='e4'>
                                <input type="number" name='e4' onChange={handleMatElement6} />
                                <br />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='sec3'>
                <div className='resultMat'>
                    <h1> The Resultant Matrix : </h1>
                    {resultMat.length > 0 ? <>
                        {resultMat.map((element, key) => {
                            return (
                                <>
                                    <div className='result-rows'>
                                        {element.map((index, keys) => {
                                            console.log(index)

                                            return (
                                                <>
                                                    <div className='row-element'>
                                                        {index}
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </>


                            )
                        })}
                    </>
                        :
                        <></>}
                </div>
            </section>
            <button onClick={handleSubmit}>Calculate</button>

        </>
    )
}

export default DoubleMatrix