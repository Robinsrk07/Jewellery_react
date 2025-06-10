import { useState } from "react";
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold

const Brand = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  const [modal, setModal] = useState(false)   
  const [editModal,setEditModal]= useState(false)

  const handleCloseModal =()=>{
    setModal(false)
  }
  const handleEditCloseModal =()=>{
    setEditModal(false)
  }

  return (
    <div>
    <div className="bg-white overflow-auto w-full h-[69vh]  rounded-xl" style={{  overflow: 'auto', fontFamily: 'Open Sans'}}>
                        <div 
                        style={{
                          position: 'sticky',
                          left: 0,
                          top: 0,
                          zIndex: 10,
                          backgroundColor: 'white',
                          padding: '1.5rem',
                          boxSizing: 'border-box',
                          display: 'flex',
                          justifyContent: 'flex-end',
                          width: 'fit-content', 
                          minWidth: '100%' 
                          }}
                            >
                              <button
                                style={{
                                  width: '90%',
                                  maxWidth: '160px',
                                  height: '30px',
                                  borderRadius: '8px',
                                  backgroundColor: isHovered
                                    ? 'rgb(97, 113, 228)'
                                    : 'rgb(126, 96, 228)',
                                  color: 'white',
                                  transition: 'background-color 0.3s ease',
                                  cursor: 'pointer',
                                  fontSize:'12px'
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={()=>setModal(true)}
                              >
                                + New Brand
                              </button>
                            </div>
      

      <div className="text-gray-500" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
        <p className="text-xs font-semibold" style={{ marginLeft: '5px' }}>Items per page: {items}</p>
        <select
          className="border border-gray-300 rounded-lg w-[114px] h-[35px] px-2"
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            backgroundColor: 'white',
            backgroundImage: 'none',
            paddingLeft: '5px',
          }}
          onChange={(e) => setItems(Number(e.target.value))}
          value={items}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <table className="table bg-white h-[60%] w-full text-sm text-left text-gray-500 min-w-[1400px] " style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
        <thead className="text-xs text-gray-400 uppercase bg-white">
          <tr>
            <th className="px-6 py-3" style={{ width: '100px', paddingLeft: '30px' }}>SL NO</th>
            <th className="px-6 py-3" style={{ width: '100px' }}>CODE</th>
            <th className="px-6 py-3" style={{ width: '130px' }}>NAME</th>
            <th className="px-6 py-3" style={{ width: '1300px' }}>DESCRIPTION</th>
            <th className="px-6 py-3" style={{ width: '130px' }}>STATUS</th>
            <th className="px-6 py-3" style={{ width: '170px' }}>ACTION</th>
            <th className="px-6 py-3" style={{ width: '200px' }}></th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((item) => (
            <tr key={item} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
              <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '40px' }}>{item}</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">Tanishq</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">Tanishq</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">A leading Indian jewellery brand known for its high-quality gold and diamond collections, including bridal and everyday wear</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                <span className="bg-green-200 text-green-800 text-xs font-bold rounded">
                  yes
                </span>
              </td>
              <td className="px-6 py-5 border-b border-gray-200">
                <span className="bg-green-200 text-green-800 font-bold text-[10px] rounded" style={{ padding: '4px 6px' }}>
                  ACTIVE
                </span>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                <button className="btn border-none w-1/2 text-white font-bold text-xs rounded-lg" style={{ width: '100px', padding: '5px', backgroundColor: '#696BE4' }}
                  onClick={()=>setEditModal(true)}
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                <button className="btn border-none text-white font-bold text-xs rounded-lg"
                  style={{ width: '220px', padding: '5px', background: 'linear-gradient(to right, #A1B1D1, #697C9B)' }}
                  onClick={() => document.getElementById('my_modal_delete').showModal()}
                >
                  Delete Brand
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>




       <div className="flex justify-center items-end h-[20vh]  gap-1" style={{padding:'10px'}}>
        <button className="btn border-gray-300 bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
          {'<'}
        </button>
        <button className="btn border-none  rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
          1
        </button>
        <button className="btn border-gray-300  bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
          {'>'}
        </button> 
      </div>
      
    </div>


{modal && (
                                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90%] max-h-[95vh]
                                                sm:w-[85vw] sm:h-[75vh] sm:p-6
                                                md:w-[65vw] md:h-[65vh] md:p-8
                                                lg:w-[55vw] lg:h-[75vh] lg:p-10
                                                xl:w-[35vw] xl:h-[95vh] xl:p-12
                                                p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto"> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                                        style={{paddingLeft:'20px', paddingTop:"20px"}}>
                                         Create Brand                       </h3>
                                    <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>
      
                                    <div className="flex flex-col flex-grow"> {/* Added flex-grow */}
                                   
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg border border-gray-300 focus:outline-none bg-white focus:border-b-2 focus:border-blue-500"                                        style={{marginLeft:'25px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Code:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] border border-gray-300 rounded-lg focus:outline-none bg-white focus:border-b-2 focus:border-blue-500"                                       
                                        style={{marginLeft:'25px'}}
                                      //  onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      

                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[90%] border border-gray-300 bg-white rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                        style={{marginLeft:'25px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                                style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                                className="font-semibold text-sm text-[#344767] w-[80%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[90%] border border-gray-300 h-[35px] bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                                                style={{marginLeft:'25px'}}
                                               // value={}
                                                name=''
                                               // onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600"></option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-6 " 
                                                style={{marginTop: '20px', marginBottom: '10px',  paddingLeft: '200px'}}>
                                            <button
                                                type="button"
                                                className="btn w-2/3 sm:w-[30%] rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                                //onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn w-2/3 sm:w-[30%] rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#5E72e4' }}
                                               onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                )}      
      
      
                      {editModal &&  (
                                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90%] max-h-[95vh]
                                                sm:w-[85vw] sm:h-[75vh] sm:p-6
                                                md:w-[65vw] md:h-[65vh] md:p-8
                                                lg:w-[55vw] lg:h-[75vh] lg:p-10
                                                xl:w-[35vw] xl:h-[95vh] xl:p-12
                                                p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto"> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                                        style={{paddingLeft:'20px', paddingTop:"20px"}}>
                                         Edit Type                       </h3>
                                    <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>
      
                                    <div className="flex flex-col flex-grow"> {/* Added flex-grow */}   
                                   
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg focus:outline-none border-gray-300  bg-white focus:border-b-2 focus:border-blue-500"                                        
                                        style={{marginLeft:'25px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Category:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg focus:outline-none bg-white border-gray-300  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      

                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[90%] bg-white border-gray-300  rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                        style={{marginLeft:'25px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        
                                        name=""
                                       ></textarea>
                            
                                           
                                            <label 
                                                style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                                className="font-semibold text-sm text-[#344767] w-[80%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[90%] h-[35px] bg-white border-gray-300 focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                                                style={{marginLeft:'25px'}}
                                              //  value={formData.status}
                                                name=''
                                               //// onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600"></option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-6 " 
                                                style={{marginTop: '20px', marginBottom: '10px',  paddingLeft: '200px'}}>
                                            <button
                                                type="button"
                                                className="btn w-2/3 sm:w-[30%] rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                                //onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn w-2/3 sm:w-[30%] rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#5E72e4' }}
                                                onClick={handleEditCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                )}
    
    </div>
  );
};

export default Brand;
