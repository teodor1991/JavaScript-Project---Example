if (water <= volume) {
    console.log(`The pool is ${Math.trunc (  water / volume  * 100 ) } % full.
                Pipe1: ${Math.trunc (pipe1 * hours / water * 100 )  } %. Pipe2: ${Math.trunc (pipe2 * hours / water * 100 )  } % `
                );
} else {
    console.log(
    `For ${hours} hours the pool  overflows with ${water - volume} liters.`
     );
    }
}

poolPipes([1000, 100, 120, 3]);
//poolPipes([100, 100, 100, 2.5]);
