/**
 * Напишете JavaScript програма, която по даден array да показва най-
често срещания символ.
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Резултат: a ( 5 times ) 
 */

function check()
{
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1.sort();
console.log(arr1);
var count=1;
var maxCount=0;
for(var i = 0;i<arr1.length-1;i++)
	{
		for(var j =1;j<arr1.length-1;j++)
		{
		  if(arr1[j]==arr1[j-1])
			  {
			   count++;
			   
			   if(count>maxCount)
				   {
				   maxCount = count;
				   }
			  }
		  else
			  {
			  count=1;
			  }
		}
	
	}	 
	return maxCount;
}

console.log(check());