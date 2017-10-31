import Queue from './queue';
import Node from './node';

describe('Queue', () => {
    describe('#constructor', () => {
        const queue = new Queue();

        it('assign 0 to this.length', () => {
            expect(queue.length).to.equal(0);
        })
    });

    describe('#unshift', () => {
        it('should assign new node as _top of queue', () => {
            const value = 144;

            const queue = new queue();

            queue.unshift(value);

            expect(queue.head).to.be.an.instanceof(Node);
            expect(queue.head.value).to.equal(144);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.unshift(50);
            queue.unshift(100);
            queue.unshift(51);
            queue.unshift(422);

            expect(queue.length).to.equal(4);
            expect(queue.head.value).to.equal(50);
            expect(queue.tail.value).to.equal(422);
        });

    });
});
