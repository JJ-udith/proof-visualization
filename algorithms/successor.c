
int successor(int a)
	//@ requires (a+1) <= INT_MAX &*& a!=0;
	//@ ensures result == (a+1);
	
{
	int res = 0;
	if (a < 0){
		res = a+1;};
	int k = 25;
	if (0 < a)
	  {res = a + 1;};
	return res;
}

int main()
  //@ requires true;
  //@ ensures true;
{
  int i = 10;
  i = successor(i);
  
  assert(i == 11);
  
  
  return 0;
}