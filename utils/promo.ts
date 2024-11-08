import { BOOK_PRICE, PROMO } from "../constants";

type KeyOfPromo = keyof typeof PROMO
type KeyNumber = { [key: number]: number }

// On compte le nombre d'occurence de chaque livre dans un tableau de livre
export function countBookOccurence(books: number[] = []): KeyNumber {
    return books.reduce((acc, book) => {
        acc[book] = (acc[book] || 0) + 1
        return acc;
    }, {} as KeyNumber);
}


// On extrait les meilleurs sets de livre pour un panier donné
function extractBestSets(books: KeyNumber): number[][] {
    if (Object.keys(books).length === 0) return []
    let bookStacks = Object.entries(books)
        .map(([bookIndex, quantity]) => ({
            index: parseInt(bookIndex),
            quantity
        }))
        .filter(book => book.quantity > 0)
    const optimalGroups: number[][] = []

    function createGroup(size: number): number[] | null {
        if (bookStacks.length < size) return null
        bookStacks.sort((a, b) => b.quantity - a.quantity)
        const group: number[] = []
        let usedBooks = new Set<number>()
        for (let i = 0; i < bookStacks.length && group.length < size; i++) {
            const book = bookStacks[i]
            if (!usedBooks.has(book.index)) {
                group.push(book.index)
                usedBooks.add(book.index)
                book.quantity--
            }
        }
        if (group.length < size) return null;

        bookStacks = bookStacks.filter(book => book.quantity > 0);

        return group;
    }
    
    while (bookStacks.length >= 4) {
        const group = createGroup(4)
        if (group) {
            optimalGroups.push(group)
        } else {
            break;
        }
    }
    while (bookStacks.length >= 5) {
        const group = createGroup(5)
        if (group) {
            optimalGroups.push(group);
        } else {
            break;
        }
    }
    while (bookStacks.length >= 3) {
        const group = createGroup(3)
        if (group) {
            optimalGroups.push(group);
        } else {
            break;
        }
    }
    while (bookStacks.length >= 2) {
        const group = createGroup(2)
        if (group) {
            optimalGroups.push(group)
        } else {
            break;
        }
    }
    bookStacks.forEach(book => {
        while (book.quantity > 0) {
            optimalGroups.push([book.index])
            book.quantity--
        }
    });

    return optimalGroups;
}


// On calcule le prix total d'un set de livre
export function calculateSetPrice(books: number[]): number {
    return books.length * BOOK_PRICE * PROMO[books.length as KeyOfPromo]
}

// On calcule le prix total d'un panier de livre
export function  bookPrice(books: number[] = []) {
    if(books.length === 0) {
        return {
            bookOccurences: {},
            bestSet: [],
            price: 0
        }
    }
    
    const bookOccurences = countBookOccurence(books)
    const bestSet = extractBestSets(bookOccurences)

    const price =  bestSet.reduce((total, set) => total + calculateSetPrice(set), 0)

    return {
        bookOccurences,
        bestSet,
        price

    }
}