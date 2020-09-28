import axios from 'axios'
const baseUrl = 'api/courses'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getSpoof = async () => {
	const data = [
		{
			name: 'Course Name 1',
			tags: [ 'web design' , 'mobile development' ],
			length: '10 weeks',
			level: 4,
			summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, veritatis animi? A consequatur exercitationem voluptates eum ab animi tempora in sunt veniam repudiandae autem dicta maxime minus, ratione nostrum laudantium?',
			teacher: 'Teacher Name 1',
			modules: [ 'N/A', 'N/A' ],
			reviews: 'N/A',
			resources: 'N/A',
			requirements: 'N/A',
		},
		{
			name: 'Course Name 2',
			tags: [ 'accessibility' ],
			length: '4 weeks',
			level: 3,
			summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, veritatis animi? A consequatur exercitationem voluptates eum ab animi tempora in sunt veniam repudiandae autem dicta maxime minus, ratione nostrum laudantium?',
			teacher: 'Teacher Name 2',
			modules: [ 'N/A', 'N/A' ],
			reviews: 'N/A',
			resources: 'N/A',
			requirements: 'N/A',
		}
	]
	return data
}

export default { getAll, getSpoof }