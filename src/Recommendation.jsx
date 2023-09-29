import React from 'react'

const Recommendation = () => {
  return (
    <div style={{padding: '2rem', background: 'linear-gradient(to left, #ff5757, #8c52ff)'}}>
        <div style={{textAlign: 'center', padding: '1.5rem'}}>
            <h1 style={{fontSize: '3rem', color: 'purple'}}> <b> Your Roadmap to Heart Health: Expert Recommendations </b> </h1>
        </div>
        <div style={{padding: '1.5rem'}}>
            <p style={{color: 'white', fontSize: '1.2rem'}}> 
                <b>
                    Welcome to the Cardio Care Recommendation Page, where we provide you with valuable tips and advice to 
                    maintain a healthy heart and improve your cardiovascular well-being. Taking care of your heart is 
                    crucial for a long and fulfilling life, and we are here to guide you on this journey. Here are some 
                    key recommendations to help you maintain a healthy heart: 
                </b>
            </p>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{margin: 'auto'}}>
                <img src="https://info.totalwellnesshealth.com/hubfs/HealthBenefitsFitness.png" alt="exercise" style={{width: '100%', height: 'auto', float: 'right'}}/>
            </div>
            <div style={{width: '50%', margin: 'auto'}}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem', marginBottom:".5rem"}}> 1. Regular Exercise: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}>
                    Physical activity is a cornerstone of cardiovascular health. Engaging in regular exercise can help 
                    strengthen your heart, improve blood circulation, and reduce the risk of heart disease. We recommend 
                    a combination of aerobic exercises (like walking, jogging, swimming, or cycling) and strength training 
                    exercises to keep your heart and body in top shape. Consult with a fitness professional or your 
                    healthcare provider to create a personalized exercise plan that suits your needs and fitness level.
                </p>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{width: '60%', margin: 'auto', marginLeft: 0}}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' , marginBottom:".5rem"}}> 2. Balanced Diet: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}> Eating a heart-healthy diet is essential for maintaining optimal cardiovascular health. Focus on including the following in your diet: </p>
                <ul style={{padding: '2rem', color: 'white'}}>
                    <li>
                        <b> Fruits and Vegetables: </b> Incorporate a variety of colorful fruits and vegetables into your meals. They are rich in vitamins, minerals, and antioxidants that support heart health.
                    </li>
                    <li>
                        <b> Whole Grains: </b> Opt for whole grains like brown rice, whole wheat bread, and oats over refined grains. They are packed with fiber, which can help lower cholesterol levels.
                    </li>
                    <li>
                        <b> Lean Proteins: </b> Choose lean protein sources such as poultry, fish, beans, and tofu. Limit your intake of red meat and processed meats, which can contribute to heart disease.
                    </li>
                    <li>
                        <b> Healthy Fats: </b> Replace saturated and trans fats with healthier options like olive oil, avocados, and nuts. These fats can help reduce bad cholesterol levels.
                    </li>
                    <li>
                        <b> Portion Control: </b> Be mindful of portion sizes to avoid overeating, which can lead to weight gain and heart-related issues.
                    </li>
                </ul>
            </div>
            <div style={{margin: 'auto'}}>
                {/* <img src="https://www.ahajournals.org/cms/asset/e336fbdd-4a35-4bbf-89d0-092eef4fbf3f/cir.0000000000001031.fig01.jpg" alt="healthy food" style={{width: '90%', height: 'auto', float: 'right'}}/> */}
                <img src="https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-balanced-diet-diagram-chart-png-image_6065044.png" alt="healthy food" style={{width: '100%', height: 'auto', float: 'right'}}/>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{margin: 'auto'}}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/avoid-junk-food-for-fitness-2705037-2252512.png?f=webp" alt="junk food" style={{width: '100%', height: 'auto', float: 'left'}}/>
            </div>
            <div style={{width: '50%', margin: 'auto'}}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' , marginBottom:".5rem"}}> 3. Avoid Junk Food: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}>
                    Limit the consumption of processed and fast foods that are high in unhealthy fats, sodium, and added sugars. 
                    These foods can raise blood pressure, increase cholesterol levels, and contribute to obesity, all of which are 
                    risk factors for heart disease. Instead, opt for home-cooked meals prepared with fresh, whole ingredients.
                </p>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{width: '100%', margin: 'auto' }}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' , marginBottom:".5rem"}}> 4. Stay Hydrated: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}>
                    Adequate hydration is vital for heart health. Water helps maintain the balance of electrolytes in your body and 
                    supports overall cardiovascular function. Aim to drink plenty of water throughout the day and reduce your intake 
                    of sugary drinks.
                </p>
            </div>
            <div style={{margin: 'auto'}}>
                <img src="https://images.hindustantimes.com/img/2021/04/23/1600x900/pexels-photo-1458671_1619165841461_1619165850937.jpeg" alt="water" style={{width: '80%', height: 'auto', float: 'right'}}/>
                {/* <img src="https://sfcommunityliving.org/wp-content/uploads/2020/03/16.34-Bowl-1.png.jpeg" alt="water" style={{width: '80%', height: 'auto', float: 'right'}}/> */}
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{margin: 'auto'}}>
                <img src="https://www.ayushmanhhs.in/wp-content/uploads/2021/04/heart-checkups.jpg" alt="heart attack" style={{width: '90%', height: 'auto', float: 'left'}}/>
                <img src="" alt="heart attack" style={{width: '90%', height: 'auto', float: 'left'}}/>
            </div>
            <div style={{width: '50%', margin: 'auto', marginRight: '0'}}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' , marginBottom:".5rem"}}> 5. Regular Checkups: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}>
                    Don't underestimate the importance of regular checkups with your healthcare provider. Routine checkups can help 
                    detect and manage risk factors for heart disease, such as high blood pressure, high cholesterol, and diabetes. 
                    Your doctor can work with you to develop a personalized prevention and treatment plan.
                </p>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{width: '100%', margin: 'auto'}}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' , marginBottom:".5rem"}}> 6. Manage Stress: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}>
                    Chronic stress can take a toll on your heart. Practice stress-reduction techniques such as deep breathing, meditation, 
                    yoga, or spending time doing activities you enjoy. Reducing stress can have a positive impact on your cardiovascular health.
                </p>
            </div>
            <div style={{margin: 'auto'}}>
                <img src="https://foodanhealth.com/wp-content/uploads/2023/04/stress-tools.jpg" alt="stress" style={{width: '80%', height: 'auto', float: 'right'}}/>
            </div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{margin: 'auto'}}>
                <img src="https://health.ucdavis.edu/media-resources/contenthub/post/internet/cultivating-health/2023/03/images-body/good-night-sleep.jpg" alt="sleep" style={{width: '80%', height: 'auto', float: 'left'}}/>
            </div>
            <div style={{width: '50%', margin: 'auto'}}>
                <h2 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' , marginBottom:".5rem"}}> 7. Get Enough Sleep: </h2>
                <p style={{color: 'white', fontSize: '1.2rem'}}>
                    Quality sleep is essential for heart health. Aim for 7-9 hours of uninterrupted sleep per night to allow your 
                    body and heart to rest and rejuvenate.
                </p>
            </div>
        </div>
        <div style={{margin: '1rem'}}>
            <p style={{color: 'white', fontSize: '1.2rem'}}>
                By following these recommendations, you can take significant steps towards improving your heart health and reducing 
                the risk of cardiovascular diseases. Remember that consistency is key, and small, sustainable changes can make a big 
                difference over time. Your heart is a precious asset, so make it a priority to care for it and enjoy a healthier, 
                happier life. If you have specific questions or need personalized advice, don't hesitate to reach out to our team 
                of experts for guidance. Your heart matters to us!
            </p>
        </div>
    </div>
  )
}

export default Recommendation