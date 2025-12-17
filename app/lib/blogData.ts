
import Blog1 from "@/public/Blog-1.jpg"
import Blog2 from "@/public/Blog-2.jpg"
import Blog3 from "@/public/Blog-3.jpg"

export const blogPosts = [
  {
    slug: "designing-for-3d-printing",
    image: Blog1,
    title: "Designing for 3D Printing: Best Practices and Tips",
    date: "September 15, 2024",
    comments: "0",
    desc: "Discover the best practices and tips for designing for 3D printing. Learn how to create designs that are optimized for 3D printing and how to use 3D printing to create physical models of your designs.",
    content: `
      <p>Discover the best practices and tips for designing for 3D printing. Learn how to create designs that are optimized for 3D printing and how to use 3D printing to create physical models of your designs.</p>
      <br/>
      <p>3D printing has revolutionized the way we create and manufacture objects. Whether you are a hobbyist or a professional engineer, understanding the nuances of designing for additive manufacturing is crucial for success.</p>
      <br/>
      <h3 class="text-xl font-bold text-white mb-2">Key Considerations</h3>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2"><strong>Wall Thickness:</strong> Ensure your walls are thick enough to support the structure but not so thick that they cause warping.</li>
        <li class="mb-2"><strong>Overhangs and Supports:</strong> Be mindful of angles greater than 45 degrees, which typically require support structures.</li>
        <li class="mb-2"><strong>Tolerances:</strong> Account for the expansion and contraction of materials during the printing process.</li>
      </ul>
      <p>By following these guidelines, you can ensure that your 3D printed parts are functional, durable, and aesthetically pleasing.</p>
    `,
    tag: "Read more"
  },
  {
    slug: "evolution-of-3d-printing",
    image: Blog2,
    title: "The evolution of 3D printing technology: From Concept to Reality",
    date: "October 20, 2024",
    comments: "0",
    desc: "Discover the evolution of 3D printing technology from concept to reality. Learn how 3D printing has evolved over the years and how it is now used in a variety of industries.",
    content: `
      <p>Discover the evolution of 3D printing technology from concept to reality. Learn how 3D printing has evolved over the years and how it is now used in a variety of industries.</p>
      <br/>
      <p>From the early days of stereolithography (SLA) in the 1980s to the modern era of high-speed metal sintering, 3D printing has come a long way. Initially used primarily for rapid prototyping, it is now a viable manufacturing method for end-use parts.</p>
      <br/>
      <h3 class="text-xl font-bold text-white mb-2">Major Milestones</h3>
      <ul class="list-disc pl-5 mb-4">
        <li class="mb-2"><strong>1986:</strong> Charles Hull patents SLA technology.</li>
        <li class="mb-2"><strong>1990s:</strong> Fused Deposition Modeling (FDM) and Selective Laser Sintering (SLS) are developed.</li>
        <li class="mb-2"><strong>2009:</strong> FDM patents expire, leading to the explosion of consumer 3D printers like MakerBot.</li>
      </ul>
      <p>Today, 3D printing is used in aerospace, healthcare, automotive, and fashion, proving its versatility and potential for future innovation.</p>
    `,
    tag: "Read more"
  },
  {
    slug: "3d-printing-future-of-manufacturing",
    image: Blog3,
    title: "3D printing: The future of manufacturing",
    date: "November 10, 2024",
    comments: "0",
    desc: "Discover the future of manufacturing with 3D printing. Learn how 3D printing is changing the way we manufacture products and how it is now used in a variety of industries.",
    content: `
      <p>Discover the future of manufacturing with 3D printing. Learn how 3D printing is changing the way we manufacture products and how it is now used in a variety of industries.</p>
      <br/>
      <p>The manufacturing landscape is undergoing a paradigm shift. Traditional subtractive methods are being complemented, and in some cases replaced, by additive manufacturing.</p>
      <br/>
      <h3 class="text-xl font-bold text-white mb-2">Impact on Supply Chains</h3>
      <p class="mb-4">One of the most significant advantages of 3D printing is the ability to produce parts on demand, reducing the need for large inventories and warehousing. This just-in-time manufacturing model is more sustainable and cost-effective.</p>
      <h3 class="text-xl font-bold text-white mb-2">Customization at Scale</h3>
      <p>Mass customization is now possible. Medical implants tailored to individual patients, custom-fit footwear, and personalized consumer goods are mere examples of what the future holds.</p>
    `,
    tag: "Read more"
  },
]

export const blogSliderData = [
  ...blogPosts,
  ...blogPosts
]
