import { Dimensions } from "react-native";
import { Book } from "../domain/model/Book";

export const { width, height } = Dimensions.get("window")

export const MIN_SIZE = 120
export const cardSize = {
    width: MIN_SIZE,
    height: MIN_SIZE * 1.67,
    borderRadius: 12
}
export const BOOK_COUNT = 30
export const TWO_PI = 2 * Math.PI;
export const THETA = TWO_PI / BOOK_COUNT;
export const CARD_SIZE_PERCENTAGE = 0.9
export const CARD_SIZE_CIRCLE = CARD_SIZE_PERCENTAGE * cardSize.width
export const CIRCLE_RADIUS = Math.max((CARD_SIZE_CIRCLE * BOOK_COUNT) / TWO_PI, width)
export const CIRCLE_CIRCUMFERENCE = TWO_PI * CIRCLE_RADIUS
export const CHANGE_FACTOR = CIRCLE_CIRCUMFERENCE / width

export const BOOKS: Book[] = [
    {
        key: "1",
        uri: "https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg"
    },
    {
        key: "2",
        uri: "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"
    },
    {
        key: "3",
        uri: "https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg"
    },
    {
        key: "4",
        uri: "https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
    },
    {
        key: "5",
        uri: "https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium"
    },
    {
        key: "6",
        uri: "https://marketplace.canva.com/EAGEuNwgF3k/1/0/1003w/canva-modern-and-simple-prayer-journal-book-cover-UL8kCB4ONE8.jpg"
    },
    {
        key: "7",
        uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/desert-book-cover-design-template-5b82e1a40630bc3e35cea4df032c7259_screen.jpg?ts=1698541652"
    },
    {
        key: "8",
        uri: "https://www.creativeparamita.com/wp-content/uploads/2022/03/A-walk-in-the-desert.jpg"
    },
    {
        key: "9",
        uri: "https://www.creativeparamita.com/wp-content/uploads/2023/02/the-sandstorm.jpg"
    },
    {
        key: "10",
        uri: "https://www.adazing.com/wp-content/uploads/2023/01/fantasy-book-covers-a-storm-of-shadows-and-pearls.jpg"
    },
    {
        key: "11",
        uri: "https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg"
    },
    {
        key: "12",
        uri: "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"
    },
    {
        key: "13",
        uri: "https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg"
    },
    {
        key: "14",
        uri: "https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
    },
    {
        key: "15",
        uri: "https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium"
    },
    {
        key: "16",
        uri: "https://marketplace.canva.com/EAGEuNwgF3k/1/0/1003w/canva-modern-and-simple-prayer-journal-book-cover-UL8kCB4ONE8.jpg"
    },
    {
        key: "17",
        uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/desert-book-cover-design-template-5b82e1a40630bc3e35cea4df032c7259_screen.jpg?ts=1698541652"
    },
    {
        key: "18",
        uri: "https://www.creativeparamita.com/wp-content/uploads/2022/03/A-walk-in-the-desert.jpg"
    },
    {
        key: "19",
        uri: "https://www.creativeparamita.com/wp-content/uploads/2023/02/the-sandstorm.jpg"
    },
    {
        key: "10",
        uri: "https://www.adazing.com/wp-content/uploads/2023/01/fantasy-book-covers-a-storm-of-shadows-and-pearls.jpg"
    },
    {
        key: "21",
        uri: "https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg"
    },
    {
        key: "22",
        uri: "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"
    },
    {
        key: "23",
        uri: "https://www.writersdigest.com/.image/t_share/MTcxMDY0NzcxMzIzNTY5NDEz/image-placeholder-title.jpg"
    },
    {
        key: "24",
        uri: "https://tmm.chicagodistributioncenter.com/IsbnImages/9780226822952.jpg"
    },
    {
        key: "25",
        uri: "https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium"
    },
    {
        key: "26",
        uri: "https://marketplace.canva.com/EAGEuNwgF3k/1/0/1003w/canva-modern-and-simple-prayer-journal-book-cover-UL8kCB4ONE8.jpg"
    },
    {
        key: "27",
        uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/desert-book-cover-design-template-5b82e1a40630bc3e35cea4df032c7259_screen.jpg?ts=1698541652"
    },
    {
        key: "28",
        uri: "https://www.creativeparamita.com/wp-content/uploads/2022/03/A-walk-in-the-desert.jpg"
    },
    {
        key: "29",
        uri: "https://www.creativeparamita.com/wp-content/uploads/2023/02/the-sandstorm.jpg"
    },
    {
        key: "30",
        uri: "https://www.adazing.com/wp-content/uploads/2023/01/fantasy-book-covers-a-storm-of-shadows-and-pearls.jpg"
    }
    
]