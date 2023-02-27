import React from 'react';

const First =(props) => {
    return (

        <div style={styles.container}>
            <h1> Hey, I'm {props.name} who came from {props.country}.</h1>
            <h1> Hey, I'm {props.name} who came from {props.country}.</h1>
            <h1> Hey, I'm {props.name} who came from {props.country}.</h1>

            <div style={styles.card}>
                <h1>This is Division one:</h1>
                2023
                <button>Click here for more information:</button>
                </div>
            <div style={styles.card}>This is the year 2022</div>
            <div style={styles.card}>This is the year 2021</div>
            <div style={styles.card}>This is the year 2020</div>
            <div style={styles.card}>This is the year 2019</div>

        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#3CBFF0',
        borderRadius: '20px',
    },
    card: {
        backgroundColor: 'magenta',
        height: '100px',
        width: '300px',
        marginBottom: '5px',
    },
}
export default First;