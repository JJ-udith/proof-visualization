#include "stdlib.h"
#include "assert.h"


struct node {
    int value;
    struct node *next;
};

struct stack {
    struct node *head;
};



struct stack *createStack()
    //@ requires true;
    //@ ensures malloc_block_stack(result) &*& stack_head(result, 0);
{
    struct stack *s = malloc(sizeof(struct stack));
    if (s == 0) { abort(); }
    s->head = 0;
    return s;
}

struct node *createNode(int v)
    //@ requires true;
    //@ ensures malloc_block_node(result) &*& node_value(result, v) &*& node_next(result, 0);
{
    struct node *n = malloc(sizeof(struct node));
    if (n == 0) { abort(); }
    n->value = v;
    n->next = 0;
    return n;
}

void push(struct stack *s, int v)
    //@ requires s->head |-> ?h;
    //@ ensures malloc_block_node(n) &*& s->head |-> ?n &*& n->next |-> h &*& n->value |-> v;
{
	struct node *n = createNode(v);
	n->next = s->head;
        s->head = n;
}

void push2(struct stack *s, int v1, int v2)
	    //@ requires s->head |-> ?prev;
	    /*@ ensures  s->head |-> ?p0 &*& 
	    		malloc_block_node(p0) &*& 
	    		p0->value |-> v2 &*& 
	    		p0->next |-> ?p &*& 
	    		malloc_block_node(p) &*& 
	    		p->next |-> prev &*& 
	    		p->value |-> v1;@*/
{
	push(s, v1);
	push(s, v2);
}

void push3(struct stack *s, int v1, int v2, int v3)
	    //@ requires s->head |-> ?prev;
	    /*@ ensures s->head |-> ?p3 &*& 
	    		malloc_block_node(p3) &*& 
	    		p3->value |-> v3 &*& 
	    		p3->next |-> ?p2 &*&
	    		malloc_block_node(p2) &*& 
	    		p2->value |-> v2 &*&
	    		p2->next |-> ?p1 &*&
	    		malloc_block_node(p1) &*&
	    		p1->value |-> v1 &*&
	    		p1->next |-> prev
	    		;@*/
{
	push(s, v1);
	push(s, v2);
	push(s, v3);
}



void pop2(struct stack *s)
    /*@ requires s->head |-> ?popA &*& 
    		malloc_block_node(popA) &*& 
    		popA->value |-> ?v2 &*& 
    		popA->next |-> ?popB &*& 
    		malloc_block_node(popB) &*& 
    		popB->value |-> ?v1 &*& 
    		popB->next |-> ?prev ;@*/
    //@ ensures s->head |-> prev;	 
{
	pop(s);
	pop(s);
}

int pop(struct stack *s)
    //@ requires s->head |-> ?popA &*& malloc_block_node(popA)  &*& popA->value |-> ?res &*& popA->next |-> ?n;
    //@ ensures s->head |-> n &*& result == res;
{
    
    struct node *h = s->head;
	
    int result = h->value;
    s->head = h->next;
    free(h);
   
    return result;
}

void dispose(struct stack *s)
    //@ requires malloc_block_stack(s)  &*& stack_head(s, _);
    //@ ensures true;
{
    free(s);
}

int main()
    //@ requires true;
    //@ ensures true;
{
    struct stack *s = createStack();
    
    push(s, 10);
    push(s, 20);
    push(s, 30);
   
    int r3 = pop(s);
    int r2 = pop(s);
    int r1 = pop(s);
    
    assert(r3 == 30);
    assert(r2 == 20);
    assert(r1 == 10);
	
    main1(s);
    dispose(s);
    
    return 0;
}


void main1(struct stack *s)
	 //@ requires  	s->head |-> _;
	 //@ ensures 	s->head |-> _;
{
	push2(s, 2, 5);
	push3(s, 6, 7, 8);
	pop2(s);
	pop2(s);
	pop(s);
}
