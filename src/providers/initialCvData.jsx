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
  
  skills_select_option: [
	  { value: "Expert"}, 
	  { value: "Experienced"}, 
	  { value: "Skilful" }, 
	  { value: "Intermediate" },
	  { value: "Beginner"}
  ],
  
  languages_select_option: [
    { value: "Native speaker" },
    { value: "Very good command" },
    { value: "Good working knowledge" },
    { value: "Working knowledge" },
    { value: "A1" },
    { value: "A2" },
    { value: "B1" },
    { value: "B2" },
    { value: "C1" },
    { value: "C2" }
  ],
  month_select_option: [
	{value: "January"},
	{value: "February"},
	{value: "March"},
	{value: "April"},
	{value: "May"},
	{value: "June"},
	{value: "July"},
	{value: "August"},
	{value: "September"},
	{value: "October"},
	{value: "November"},
	{value: "December"}
   ],
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
   },
   button:
   {
	next: "Next",
	back: "Back",
	print: "Print",
   }
};
