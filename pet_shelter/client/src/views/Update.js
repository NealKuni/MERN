import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PetHeader from '../components/PetHeader';


const Update = (props) => {
    // const { id } = props;
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + props.id)
            .then(res => {
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setSkill1(res.data.petSkills[0]);
                setSkill2(res.data.petSkills[1]);
                setSkill3(res.data.petSkills[2]);
            })
            .catch(err => console.log(err))
    }, []);

    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + props.id, {
          petName,
          petType,
          petDescription,
          skill1,
          skill2,
          skill3      
        })
            .then(res => {
              console.log(res)
              navigate("/")
            })
            .catch((err) => {
              console.log(`Error while updating "pet" ${err}`);
              if(err.response.data.errors){
                setErrors(err.response.data.errors)
              }
            });
    }
    return (
        <div>
            <PetHeader/>
            <div className="container-sm d-flex justify-content-between pb-2">
              <h5>Edit {petName}</h5>
            </div>
            <div className="container-sm border border-secondary p-3 ">
              <form onSubmit={updatePet} className="d-flex justify-content-evenly">
                <div className="col-6">
                    <label className="form-label">Pet Name:</label>
                    <div className="ptsb-3">
                      {
                        errors.petName ?
                          <p className="text-danger" > {errors.petName.message} </p>
                          : null
                      }
                      <input className="form-control" type="text" value={petName} onChange={(e) => setPetName(e.target.value)}/>
                    </div>
                    
                    <label className="form-label">Pet Type:</label>
                    <div className="ptsb-3">
                      {
                        errors.petType ?
                          <p className="text-danger" > {errors.petType.message} </p>
                          : null
                      }

                      <input className="form-control" type="text" value={petType} onChange={(e) => setPetType(e.target.value)}/>
                    </div>

                    <label className="form-label">Pet Description:</label>
                    <div className="ptsb-3">
                      {
                        errors.petDescription ?
                          <p className="text-danger" > {errors.petDescription.message} </p>
                          : null
                      }

                      <input className="form-control" type="text" value={petDescription}  onChange={(e) => setPetDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="col-6 ms-3">
                    <label className="form-label">Skill 1:</label>
                    <div className="ptsb-3">
                      <input className="form-control" type="text" value={skill1} onChange={(e) => setSkill1(e.target.value)}/>
                    </div>

                    <label className="form-label">Skill 2:</label>
                    <div className="ptsb-3">
                      <input className="form-control" type="text" value={skill2} onChange={(e) => setSkill2(e.target.value)}/>
                    </div>

                    <label className="form-label">Skill 3:</label>
                    <div className="ptsb-3">
                      <input className="form-control" type="text"  value={skill3} onChange={(e) => setSkill3(e.target.value)}/>
                    </div>
                    <button type="submit" className="bi bi-pencil mt-3 btn-primary" > Edit Pet</button>
                </div>   
                
              </form>
            </div>
        </div>
    )
}
export default Update;