export default{
    name:"destination",
    title:"Destination",
    type:"document",
    fields: [
        {
            name:"name",
            title:"Destination name",
            type:"string",
            validation : (Rule) => Rule.required(),
        },
        {
            name:"desc_short",
            title:"Slug",
            type:"Short description",
            validation : (Rule) => Rule.max(200),
        },
        {
            name:"image",
            title:"Image",
            type:"reference",
            to :{ type :"author"},
        },
        {
            name:"mainImage",
            title:"Main image",
            type:"image",
            option :{
                hotspot:true ,
            },
        },
        {
            name:"categories",
            title:"Categories",
            type:"array",
            of: [{type:"reference", to :{ type : "category"}}],
        },
        {
            name:"publishedAt",
            title:"published at",
            type:"datetime",
        },
        {
            name:"body",
            title:"Body",
            type:"blockContent"
        },
    ],
}