// REST OPERATOR PRAVI NIZ OD PARAMETARA KOJI SE PROSLEDE FUNKCIJI
const max = (...niz) => {
    // let maxi = a
    // if(b > maxi)
    //     maxi = b
    // if(c > maxi)
    //     maxi = c
    // return maxi
    let max = niz[0]
    niz.forEach(el, index => {
        if(index == 0)
            return
        if(el > max)
            max = el
    })
    return max
}
