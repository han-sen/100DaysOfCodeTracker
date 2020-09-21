import React from "react";

export default function Dater(props) {
    return (
        <section className="dating_wrap">
            <div className="dating_left">
                {props.daters
                    .slice(0, props.daters.length / 2)
                    .map((dater, i) => {
                        return (
                            <ul>
                                <li key={i + dater.img}>
                                    <img src={dater.img} alt={dater.name} />
                                </li>
                                <li key={i + dater.name}>{dater.name}</li>
                                <li key={i + dater.starsign}>
                                    {dater.starsign}
                                </li>
                            </ul>
                        );
                    })}
            </div>
            <div className="dating_center">
                <h2>Matching Area</h2>
            </div>
            <div className="dating_right">
                <ul>
                    {props.daters
                        .slice(props.daters.length / 2, props.daters.length)
                        .map((dater, i) => {
                            return (
                                <ul>
                                    <li key={i + dater.img}>
                                        <img src={dater.img} alt={dater.name} />
                                    </li>
                                    <li key={i + dater.name}>{dater.name}</li>
                                    <li key={i + dater.starsign}>
                                        {dater.starsign}
                                    </li>
                                </ul>
                            );
                        })}
                </ul>
            </div>
        </section>
    );
}
