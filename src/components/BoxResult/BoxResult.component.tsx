import { Box, ContainerValues } from "./BoxResult.styles";
import { BoxResultTypes } from "./BoxResult.types";

function BoxResult({ tipAmount, total, resetValues, isDisabled }: BoxResultTypes) {
    console.log('isDisabled', isDisabled);
    return (
       <Box>
            <ContainerValues>
                <div>
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </div>

                <h1>${tipAmount}</h1>
            </ContainerValues>

            <ContainerValues>
                <div>
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>

                <h1>${total}</h1>
            </ContainerValues>

            <button onClick={resetValues} disabled={isDisabled}>RESET</button>
       </Box>
    )
}

export default BoxResult;