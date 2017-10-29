import { Node, Stack } from '../stack';

describe('Stack', () => {
    describe('#constructor', () => {
        const stack = new Stack();

        it('assign 0 to this.length', () => {
            expect(stack.length).to.equal(0);
        })
    });

    describe('#push', () => {
        it('should assign new node as _top of stack', () => {
            const value = 10;

            const stack = new stack();

            stack.push(value);

            expect(stack._top).to.be.an.instanceof(Node);
            expect(stack._top.value).to.equal(10);
        });

        it('should set new node as _top of stack and add new value', () => {
            const stack = new stack();

            stack.push(50);
            stack.push(100);
            stack.push(51);
            stack.push(422);
            stack.push(55);
            stack.push(112);

            expect(stack.length).to.equal(6);
            expect(stack._top.value).to.equal(112);
        });

    });
});
