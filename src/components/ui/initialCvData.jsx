export const initialCvData = {
  title: 
  {
	main: "Curriculum Vitae",
	personal: "Personal",
	resume: "Resume objective",
	education: "Education and Qualifications",
	experience: "Work Experience",
	skills: "Skills",
	interests :"Interests",
	languages: "Languages"
  },
  personal: {
	name: { label: "Name", value: "Roman" },
    address: { label: "Address", value: "" },
	phone: { label: "Phone number", value: "" },
	email: { label: "Email", value: "" },

  },
  education: [
	{date:"2023-12-01", heading: "test", subheading: "tevca vad", content: "test content"},
	 {date:"2023-12-01", heading: "test", subheading: "tevca vad", content: "test content"}	
  ],
 
  experience: [
	{date:"2023-12-01", heading: "test", subheading: "tevca vad", content: "test content"},
	{date:"2023-12-01", heading: "test", subheading: "tevca vad", content: "test content"}
 ],
 
  skills: [{label: 'Test Skill', value: 'Expert' }],
  skills_select_option: [
	{value: "Expert"}, 
	{ value: "Experienced"}, 
	{ value: "Skilful" }, 
	{ value: "Intermediate" },
	{ value: "Beginner"}],
  
  languages: [{label: "English", value: 'B2'}, {label: "French", value: 'B1'} ],
  languages_select_option: [
    { value: "Native speaker" },
    { value: "Highly proficient in speaking and writing" },
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

  
  interests: "Hiking, Jumping",
  resume: "Career goals or job title you re aiming for Work experience  Education Skills Certifications or achievements (if any)"
  
  
};
