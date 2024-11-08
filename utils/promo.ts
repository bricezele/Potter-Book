import { BOOK_PRICE, PROMO } from "../constants";

type KeyOfPromo = keyof typeof PROMO
type KeyNumber = { [key: number]: number }

// On compte le nombre d'occurence de chaque livre dans un tableau de livre
export function countBookOccurence(books: number[] = []): KeyNumber {
    return books.reduce((acc, book) => {
        acc[book] = (acc[book] || 0) + 1;
        return acc;
    }, {} as KeyNumber);
}

// On extrait les meilleurs sets de livre pour un panier donné
export function extractBestSets(bookCounts: KeyNumber): number[][] {
    const sets: number[][] = [];
    const books = Object.keys(bookCounts).map(Number);

    while (Object.values(bookCounts).some(count => count > 0)) {
        const currentSet: number[] = [];
        
        for (const book in bookCounts) {
            const currentSet: number[] = []
            if (bookCounts[book] > 0) {
                currentSet.push(Number(book));
                bookCounts[book]--;
            }
        }

        if(currentSet.length > 0) {
            sets.push(currentSet);
        }
    }

    return sets;
}

// On calcule le prix total d'un set de livre
export function calculateSetPrice(books: number[]): number {
    return books.length * BOOK_PRICE * PROMO[books.length as KeyOfPromo];
}

// On calcule le prix total d'un panier de livre
export function priceBook(books: number[] = []) {
    if(books.length === 0) return 0
    
    const bookCounts = countBookOccurence(books)
    const sets = extractBestSets(bookCounts)

    return sets.reduce((total, set) => total + calculateSetPrice(set), 0)
}