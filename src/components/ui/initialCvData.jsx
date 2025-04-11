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
	name: { label: "Name", value: "Roman Doe" },
    address: { label: "Address", value: "New York, NY" },
	phone: { label: "Phone number", value: "+1 (123) 456-7890" },
	email: { label: "Email", value: "johndoe@example.com" },

  },
  education: [
	 {date_start_year:"2017", date_end_year:"2019", date_start_month:"", date_end_month:"", heading: "Bachelor of Arts in Marketing", subheading: "test subheading 1", content: "University of New York, New York, NY"},
  ],
 
  experience: [
	{date_start_year:"2017",
		date_end_year:"2021", date_start_month:"February", 
		date_end_month:"February", 
		heading: "test heading",
		subheading: "test subheading 1",
		content: "Conducted market research to identify emerging trends and customer preferences.Created email marketing campaigns that resulted in a 15% increase in open rates and a 10% increase in conversion rates. Managed PPC advertising budgets and optimized ad performance across Google Ads and social media platforms."},
 ],
 
  skills: [
	{label: 'Digital Marketing Strategy', value: 'Expert' },
	{label: 'Content Creation & Management', value: 'Skilful' },
	{label: 'Social Media Marketing (Facebook, Instagram, Twitter, LinkedIn)', value: 'Expert' },
	
  ],

  
  languages: [{label: "English", value: 'B2'}, {label: "French", value: 'B1'} ],  
  interests: "jumping",
  resume: "Dynamic and results-oriented marketing professional with over 5 years of experience in digital marketing, brand strategy, and content creation. Proven track record in driving customer engagement and increasing revenue through innovative campaigns. Highly skilled in project management, social media marketing, and data analysis.",
  
  skills_select_option: [
  { value: "Expert"}, 
  { value: "Experienced"}, 
  { value: "Skilful" }, 
  { value: "Intermediate" },
  { value: "Beginner"}],
  
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
	{value: "December"},

]};
