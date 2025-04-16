export const initialCvData = {
  personal: {
	firstname: { label: "personal.firstname", value: "", 'hide_empty_value': true}, 
	lastname: { label: "personal.lastname", value: "", 'upper_case': true, 'hide_empty_value': true}, 
    address: { label: "personal.address", value: "", 'hide_empty_value': true },
	phone: { label: "personal.phone", value: "+35", 'hide_empty_value': true },
	email: { label: "personal.email", value: "", 'hide_empty_value': true },
  },
  
  education: [], 
  experience: [],
 
  skills: [],  
  languages: [],  
  interests: "",
  resume: "",
   education_initial: 
   {	
	date_start_year:"",
	date_end_year:"",
	date_start_month:"",
	date_end_month:"",
	heading: "",
	subheading: "", 
	content: ""
   },
   experience_initial: 
   {	
	date_start_year:"",
	date_end_year:"",
	date_start_month:"",
	date_end_month:"",
	heading: "",
	subheading: "", 
	content: ""
   }, 
   languages_initial:
   {	
   	label: "",
   	value: ""
   },
   skills_initial: 
   {	
	label: "",
	value: ""
   }
};
