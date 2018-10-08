let container = document.createElement("div")
container.className = "container"

document.body.appendChild(container)

let nav = document.createElement("nav")

container.appendChild(nav)

let siteName = document.createElement("div")
siteName.className = "sitename"
siteName.innerHTML = "HighOnCoding"

nav.appendChild(siteName)

let home = document.createElement("a")
home.id = "Index"
home.href = "index.html"
home.innerHTML = "<b>Home</b>"

nav.appendChild(home)

let categories = document.createElement("a")
categories.id = "Categories"
categories.href = "categories.html"
categories.innerHTML = "Categories"

nav.appendChild(categories)

let mainArticle = document.createElement("div")
mainArticle.className = "mainArticle"

let mainHeading = document.createElement("h1")
mainHeading.innerHTML = "Curse of the Current Reviews"

let mainParagraph = document.createElement("p")
mainParagraph.innerHTML = "When you want to buy any application from Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage.  Their choice is dependent on three important factors: price, screenshot and reviews.</p>"

container.appendChild(mainArticle)
mainArticle.appendChild(mainHeading)
mainArticle.appendChild(mainParagraph)

let article1 = document.createElement("div")
article1.className = "Article"
article1.id = "Article1"

let article1Heading = document.createElement("h2")
article1Heading.innerHTML = "Hello WatchKit"

let article1Paragraph = document.createElement("p")
article1Paragraph.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.  The WatchKit framework enables the developers to create Apple Watch apllications.  In this article we are going to foucus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

let commentLikeBar1 = document.createElement("div")
commentLikeBar1.className = "commentLikeBar"

let commentPara1 = document.createElement("p")
commentPara1.innerHTML = "12 comments"

let likePara1 = document.createElement("p")
likePara1.innerHTML = "124 likes"



container.appendChild(article1)
article1.appendChild(article1Heading)
article1.appendChild(article1Paragraph)
article1.appendChild(commentLikeBar1)
commentLikeBar1.appendChild(commentPara1)
commentLikeBar1.appendChild(likePara1)

let article2 = document.createElement("div")
article2.className = "Article"
article2.id = "Article2"

let article2Heading = document.createElement("h2")
article2Heading.innerHTML = "Introduction to Swift"

let article2Paragraph = document.createElement("p")
article2Paragraph.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX apllications. Swift is a fairly new language  and still in development but it clearly reflects the intentions and the future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started."

let commentLikeBar2 = document.createElement("div")
commentLikeBar2.className = "commentLikeBar"

let commentPara2 = document.createElement("p")
commentPara2.innerHTML = "15 comments"

let likePara2 = document.createElement("p")
likePara2.innerHTML = "45 likes"



container.appendChild(article2)
article2.appendChild(article2Heading)
article2.appendChild(article2Paragraph)
article2.appendChild(commentLikeBar2)
commentLikeBar2.appendChild(commentPara2)
commentLikeBar2.appendChild(likePara2)


// < div class="Article" id = "Article1" >
    //     <h2>Hello WatchKit</h2>
    //     <p>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.  The WatchKit framework enables the developers to create Apple Watch apllications.  In this article we are going to foucus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</p>
    //     <div class="commentLikeBar">
    //         <p>12 comments</p><p>124 likes</p>
    //     </div>
    //   </div >
    // <div class="Article" id="Article2">
    //     <h2>Introduction to Swift</h2>
    //     <p>Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX apllications. Swift is a fairly new language  and still in development but it clearly reflects the intentions and the future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started.</p>
    //     <div class="commentLikeBar">
    //         <p>15 comments</p><p>45 likes</p>
    //     </div>