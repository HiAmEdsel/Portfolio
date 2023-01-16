import './Skills.css';



const Skills = () => {
    return (
        <section id='skills'>
            <h5>What Skills I Have</h5>
            <h1>My Skills</h1>

            <div className='container Skills__container'>
                <div className='Skills__frontend'>
                    <h3> Front Development </h3>
                    <div className='Skills__content'>
                        <article className="Skills__details">
                            <h4> HTML </h4>
                            <small className='text-light'> Experienced </small>
                        </article>
                        <article className="Skills__details">
                            
                            <h4> CSS </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="Skills__details">
                            
                            <h4> JavaScript </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="Skills__details">
                            
                            <h4> React / NextJS </h4>
                            <small className='text-light'> basic </small>
                        </article>
                    </div>
                </div>
                <div className='Skills__backend'>
                    <h3> Back End Development </h3>
                    <div className='Skills__content'>
                        <article className="Skills__details">
                            
                            <h4> Firebase </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="Skills__details">
                            
                            <h4> Node.js </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="Skills__details">
                            
                            <h4> MySQL </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="Skills__details">
                            
                            <h4> MongoDB </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;