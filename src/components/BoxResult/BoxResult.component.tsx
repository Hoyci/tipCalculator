import { Box, ContainerValues } from "./BoxResult.styles";
import { BoxResultTypes } from "./BoxResult.types";

function BoxResult({ tipAmount, total, resetValues }: BoxResultTypes) {
    return (
       <Box>
            <ContainerValues>
                <div>
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </div>

                <h1>${tipAmount ? tipAmount : 0}</h1>
            </ContainerValues>

            <ContainerValues>
                <div>
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>

                <h1>${total ? total : 0}</h1>
            </ContainerValues>

            <button onClick={resetValues}>RESET</button>
       </Box>
    )
}

export default BoxResult;