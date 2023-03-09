
export const generateId = () => {
    const random =Math.random().toString(36).substr(2, 5).split('').map(c => Math.random() < 0.5 ? c.toUpperCase() : c).join('');
    const date = Date.now().toString(36)
    return random + date
}